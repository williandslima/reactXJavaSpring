package com.getbook.repository;

import com.getbook.model.Postagem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PostagemRepository extends JpaRepository<Postagem,Long> {
 
	public List<Postagem>findAllByTituloLivroContainingIgnoreCase(@Param ("tituloLivro") String tituloLivro);
	
	//public Optional<PostagemVO> findAllByTituloLivro(String tituloLivro);

}
