package backend.meli.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.meli.models.Producto;
import backend.meli.services.ProductoService;

@RestController
@RequestMapping("/producto")
public class ProductoREST {
	
	@Autowired
	private ProductoService productoService;

	@GetMapping("/GetAllProducts")
	private ResponseEntity<List<Producto>> getAllProducto(){
		return ResponseEntity.ok(productoService.findAll());
	}
	
	@PostMapping
	private ResponseEntity<Producto> saveProducto(@RequestBody Producto producto){
		try {
			Producto product = productoService.save(producto);				
			return ResponseEntity.created(new URI("/producto/"+product.getIdProducto())).body(product);		
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}		
	}
	
	@DeleteMapping(value = "delete/{id}")
	private ResponseEntity<Boolean> deleteProducto(@PathVariable("id") Long id){
		productoService.deleteById(id);
		return ResponseEntity.ok(!(productoService.findById(id) != null));
	}
}
