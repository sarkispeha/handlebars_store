$(document).on('ready', function() {
  
	var productTemplate = $('#HBtemplate').html();
	var template = Handlebars.compile(productTemplate);

	var productHTML = productsData.productsList.map(function(product){
		return template(product);
	 });
		$('#product-container').append(productHTML);

////////////////////////


	$('#product-container').on('click', '#addToList', function(){
		var productTitle = $(this).closest('#product').find('h3').text();

		var wishListTemplate = $('#wishTemplate').html();
		var wishTemplate = Handlebars.compile(wishListTemplate);

		var wishHTML = wishTemplate({title: productTitle});

		$("#wishlist").append(wishHTML);
	});

	$('#wishlist').on('click', '#remove', function(){
		console.log('work');
		var place = $(this).closest('li');
		console.log(place);
		$(this).closest('li').remove();
	});


});