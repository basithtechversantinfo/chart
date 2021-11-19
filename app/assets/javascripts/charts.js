
$( document ).ready(function() {
	
    Highcharts.chart('display_graph_section', {

    chart: {
        height: (9 / 16 * 100) + '%' // 16:9 ratio
    },

    title: {
        text: 'Monthly Project Status'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        type: 'column'
    }]

});
});

