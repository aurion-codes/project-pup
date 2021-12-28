class DogsController < ApplicationController
 
    def index
        render json: Dog.all
    end

    def show 
        dog = Dog.find(params[:id])
        render json: dog
    end

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        dog = Dog.create(params_dogs)
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

    private

    def params_dogs
        params.permit(:name, :age, :breed, :dob, :adopted, :vaccinated, :bio, :img_url)
    end
end
