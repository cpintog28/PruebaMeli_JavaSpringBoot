package backend.meli.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.meli.models.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
