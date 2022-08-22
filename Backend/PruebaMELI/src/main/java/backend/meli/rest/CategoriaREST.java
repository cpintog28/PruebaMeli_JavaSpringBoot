package backend.meli.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.meli.models.Categoria;
import backend.meli.services.CategoriaService;

@RestController
@RequestMapping("/categoria")
public class CategoriaREST {
	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping("/GetCategorias")
	private ResponseEntity<List<Categoria>> getAllCategoria(){
		return ResponseEntity.ok(categoriaService.findAll());
	}
	
	
	
}
