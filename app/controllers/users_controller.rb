class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end


    def show 
        user = User.find(params[:id])
        render json: user
    end

    def showme
        user = User.find(session[:user_id])
        render json: user
    end
      

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        dog = User.create(params_user)
        render json: user
    end

     
    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        user = User.find(params[:id])
        user.update(params_users)
        render json: user
    end

    
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        user = User.find(params[:id])
        user.destroy!
        head :no_content   
    end

    private

    def params_users
        params.permit(:name, :email, :username, :password_digest)
    end
end
