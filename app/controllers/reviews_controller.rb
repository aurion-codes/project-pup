class ReviewsController < ApplicationController

     #Get /review
     def index
        reviews = Review.all
        render json: reviews
    end


    #Show Get/dog:id
    def show 
        review = Review.find(params[:id])
        render json: review
    end
    


    #Create
    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        review = Review.find_by(dog_id: params[:dog_id], user_id: params[:user_id])
        dog = Dog.find_by(id: params[:dog_id])

        if review.present?
            review.destroy!
        elsif dog&.user_id != current_user.id
            Review.create(params_reviews)
        end
        reviews = Dog.find_by(id: params[:dog_id]).reviews.reload.count
        render json: reviews
    end

     
    #Update
    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        review = Review.find(params[:id])
        review.update(params_reviews)
        render json: review
    end

    #Delete
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        review = Review.find(params[:id])
        review.destroy!
        head :no_content   
    end

    private

    def params_reviews
        params.permit(:like, :user_id, :dog_id)
    end

end
