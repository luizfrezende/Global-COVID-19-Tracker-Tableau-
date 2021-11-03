function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/COVID-19Cases_15840488375320/COVID-19GlobalView?:language=pt-BR&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}