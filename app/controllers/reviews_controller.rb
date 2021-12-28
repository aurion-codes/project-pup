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
        review = Review.create(params_reviews)
        render json: review
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

    def params_review
        params.permit(:comment, :user_id, :dog_id)
    end

end
