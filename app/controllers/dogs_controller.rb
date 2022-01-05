class DogsController < ApplicationController
    
 
    def index
        dogs = Dog.all.map{|dog| dog.details}
        render json: dogs
    end

    def show 
        dog = Dog.find(params[:id])
        render json: dog
    end

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        dog = current_user.dogs.create!(params_dogs)
        render json: dog
    end

    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        dog = Dog.find(params[:id])
        dog.update(params_jobs)
        render json: dog
    end

    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        dog = Dog.find(params[:id])
        dog.destroy!
        head :no_content   
    end 

    def user_dogs
        dogs = current_user.dogs
        dogs = dogs.map{|dog| dog.details}
        render json: dogs
    end

    private

    def params_dogs
        params.permit(:name, :age, :breed, :dob, :gender, :adopted, :vaccinated, :bio, :img_url)
    end
end
