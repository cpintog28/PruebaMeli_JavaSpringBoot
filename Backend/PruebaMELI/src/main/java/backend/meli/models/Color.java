package backend.meli.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Color")
public class Color {
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private int idColor;
	private String color;
	private String descripcion;
	
	public Color() {		
	}	
	
	public Color(String color, String descripcion) {
		super();
		this.color = color;
		this.descripcion = descripcion;
	}
	
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getIdColor() {
		return idColor;
	}

	public void setIdColor(int idColor) {
		this.idColor = idColor;
	}
	
	
	
	
}
