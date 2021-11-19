#This controller is responsible chart functions
class ChartsController < ApplicationController
  
   #This public method is responsible for building chart 
    def build_chart
      @graph_data = get_graph_chart_data
    end
   
   
    #This method is responsible getting graph chart data
    def get_graph_chart_data
      @graph_data = GraphChart.get_chart_data
      return @graph_data
    end

end
