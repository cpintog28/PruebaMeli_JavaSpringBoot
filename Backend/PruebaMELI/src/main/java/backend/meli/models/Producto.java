package backend.meli.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Producto")
public class Producto {
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private Long idProducto; 
	private String nombre;
	private String descripcion;
	private int valorUnit;
	private String imagen;
		
	@ManyToOne
	@JoinColumn(name = "idCategoria")
	private Categoria categoria;
	@ManyToOne
	@JoinColumn(name = "idColor")
	private Color color;
	
	public Producto() {		
	}
		
	public Producto(String nombre, String descripcion, int valorUnit, Categoria categoria, Color color, String imagen) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.valorUnit = valorUnit;
		this.categoria = categoria;
		this.color = color;
		this.imagen = imagen;
	}
	
	public Long getIdProducto() {
		return idProducto;
	}
	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getValorUnit() {
		return valorUnit;
	}
	public void setValorUnit(int valorUnit) {
		this.valorUnit = valorUnit;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public Color getColor() {
		return color;
	}
	public void setColor(Color color) {
		this.color = color;
	}
	
	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
}
