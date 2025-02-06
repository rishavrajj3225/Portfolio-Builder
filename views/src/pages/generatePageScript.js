<script>
    function getPageTemplate(){
        var page =  "import React from \"react\"; " +
        "import Card from \"../components/Card\"; " +
        "import { red } from \"@material-ui/core/colors\"; " + 
        "import { rgbToHex } from \"@material-ui/core\"; " +
        "function CustomPage() {" +
            "return (" +
                "Insert_Custom_Page_Here" +
            ")" +
        "}";

        return 'export default CustomPage;'
    }

    function generatePage(){

        var customPage = ""

        if(document.getElementById("navbar").checked){
            customPage += "<div><Nav /></div>"
        }

        if(document.getElementById("jumbotron").checked){
            customPage += "<div><Jumbotron /></div>"
        }

        if(document.getElementById("jumbotronp").checked){
            customPage += "<div><JumbotronP /></div>"
        }

        if(document.getElementById("jumbotronr").checked){
            customPage += "<div><JumbotronR /></div>"
        }

        if(document.getElementById("accordion").checked){
            customPage += "<div><Accordion /></div>"
        }

        if(document.getElementById("table").checked){
            customPage += "<div><Table /></div>"
        }

        if(document.getElementById("carouselp").checked){
            customPage += "<div><CarouselP /></div>"
        }

        if(document.getElementById("carouselr").checked){
            customPage += "<div><CarouselR /></div>"
        }

        if(document.getElementById("carousel").checked){
            customPage += "<div><Carousel /></div>"
        }

        if(document.getElementById("transferlist").checked){
            customPage += "<div><TransferList /></div>"
        }

        if(document.getElementById("stepper").checked){
            customPage += "<div><Stepper /></div>"
        }

        if(document.getElementById("card").checked){
            customPage += "<div className=\"MyCard50\"><Card /></div>"
        }

        if(document.getElementById("footer").checked){
            customPage += "<div><Footer /></div>"
        }

        var completePage = getPageTemplate();
        completePage = completePage.replace("Insert_Custom_Page_Here", customPage);

        // Log the generated page for demonstration purposes
        console.log(completePage);

        // Here, you can either send the generated page to an API or display it somewhere
        // For now, we just log it.
    }
    
</script>
