# require 'byebug'
class PriceService
    def self.fetch_prices(ticker)
        date_and_close_pairs = client
            .stock(symbol: ticker)
            .timeseries(adjusted: true, outputsize:'full')
            .output["Time Series (Daily)"]
            .map {|k, v| [k, v["5. adjusted close"]]}
        Hash[date_and_close_pairs]
        # byebug
        # 1+1
    end

    def self.client
        @client ||= Alphavantage::Client.new(
            key: Rails.application.credentials.dig(:alphavantage, :key)
        )
    end
end 