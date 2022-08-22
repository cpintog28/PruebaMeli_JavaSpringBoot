package backend.meli.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import backend.meli.models.Color;
import backend.meli.services.ColorService;

@RestController
@RequestMapping("/color")
public class ColorREST {

	@Autowired
	private ColorService colorService;
	
	@GetMapping("/GetColors")
	private ResponseEntity<List<Color>> getAllColors(){
		return ResponseEntity.ok(colorService.findAll());
	}
}
