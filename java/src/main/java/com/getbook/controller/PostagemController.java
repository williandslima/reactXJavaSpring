package com.getbook.controller;

import com.getbook.model.Postagem;
import com.getbook.repository.PostagemRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Api(tags = "PostagemEndpoint") 
@RestController
@RequestMapping("/postagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostagemController {

	@Autowired
	private PostagemRepository postagemRepository;

	@ApiOperation(value = "Find all postagens" )
	@GetMapping(value = "/all", produces = { "application/json", "application/xml", "application/x-yaml" })
	public ResponseEntity<List<Postagem>> getAll() {
		return ResponseEntity.ok(postagemRepository.findAll());

	}

	@GetMapping("/titulo/{tituloLivro}")
	public ResponseEntity<List<Postagem>> getTitulo(@PathVariable String tituloLivro) {
		return ResponseEntity.ok(postagemRepository.findAllByTituloLivroContainingIgnoreCase(tituloLivro));
	}
	
	
	@ApiOperation(value = "Create a new book")
	@PostMapping(produces = { "application/json", "application/xml", "application/x-yaml" }, 
			consumes = { "application/json", "application/xml", "application/x-yaml" })
	public ResponseEntity<Postagem> getPostagem(@Valid @RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.CREATED).body(postagemRepository.save(postagem));
	}

	@ApiOperation(value = "Update a specific book")
	@PutMapping(produces = { "application/json", "application/xml", "application/x-yaml" }, 
			consumes = { "application/json", "application/xml", "application/x-yaml" })
	public ResponseEntity<Postagem> updatePostagem(@Valid @RequestBody Postagem postagem) {
		if (postagem.getId() == null) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(postagemRepository.save(postagem));
		}
	}

	@ApiOperation(value = "Find a specific book by your ID" )
	@GetMapping(value = "/{id}", produces = { "application/json", "application/xml", "application/x-yaml" })
	public ResponseEntity<Postagem> buscaId(@PathVariable("id") Long id) {
		Optional<Postagem> buscaId = postagemRepository.findById(id);
		return buscaId.map(resposta -> ResponseEntity.ok(resposta)).orElse(ResponseEntity.notFound().build());

	}

	@ApiOperation(value = "Delete a specific book by your ID")
	@DeleteMapping("/{id}")
	public ResponseEntity<Postagem> deletePostagem(@PathVariable Long id) {
		try {
			postagemRepository.deleteById(id);
			return ResponseEntity.status(204).build();

		} catch (Exception e) {
			return ResponseEntity.notFound().build();

		}
	}

}
