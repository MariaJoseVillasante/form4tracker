module Api 
    class Api::PricesController < ApplicationController
        # skip_before_action :verify_authenticate_token

        def index
            company = Company.find(params[:company_id])
            render json: company.prices
        end
    end
end
