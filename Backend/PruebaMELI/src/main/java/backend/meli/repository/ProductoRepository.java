package backend.meli.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.meli.models.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

}
