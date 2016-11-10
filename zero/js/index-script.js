$(document).ready(function(e){
		$(function(){
			$(".opcaoGeodesicas").hide();
			$(".opcaoTensigreis").hide();
			$(".textoExplicativo").hide();
			$(".textoGeodesicas").hide();
			$(".textoTensigreis").hide();
		})
		
		
		function opcoes(){
			$(".opcaoGeodesicas").show();
			$(".opcaoTensigreis").show();
			$(".textoExplicativo").show();
		}
		
		function geo(){
			$(".textoGeodesicas").show();
		}
		
		function ten(){
			$(".textoTensigreis").show();
		}
		
		
});