$(function() {
    var viz = {};
    
    var data = [10, 20, 30, 80],
        width = 600,
        height = 600;
    
    
    viz.showOverview = function (container) {
        var svgContainer = d3.select(container).append('svg')
            .attr('width', width)
            .attr('height', height),
            circle = svgContainer.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 40);
    };
    
    window.viz = viz;
    
    return viz;
});