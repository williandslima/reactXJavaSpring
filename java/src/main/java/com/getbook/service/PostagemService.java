package com.getbook.service;

import java.util.List;
import com.getbook.data.vo.PostagemVO;
import com.getbook.mapper.DozerMapper;
import com.getbook.model.Postagem;
import com.getbook.repository.PostagemRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PostagemService {

	@Autowired
	private PostagemRepository repository;

	public List<PostagemVO> findAll() {

		return DozerMapper.parseListObejects(repository.findAll(), PostagemVO.class);
	}

	public PostagemVO findById(Long id) {

		var entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("nao existe para este id"));
		return DozerMapper.parseObject(entity, PostagemVO.class);
	}

	public PostagemVO create(PostagemVO postagem) {
		var entity = DozerMapper.parseObject(postagem, Postagem.class);
		var vo = DozerMapper.parseObject(repository.save(entity), PostagemVO.class);
		return vo;
	}
	
	public PostagemVO update(PostagemVO postagem) {
		var entity = repository.findById(postagem.getId())
				.orElseThrow(() -> new ResourceNotFoundException("nao existe para este id"));
		
		entity.setAutor(postagem.getAutor());
		entity.setDescricao(postagem.getDescricao());
		entity.setFoto(postagem.getFoto());
		entity.setTituloLivro(postagem.getTituloLivro());
		
		var vo = DozerMapper.parseObject(repository.save(entity), PostagemVO.class);
		return vo;
	}
	
	public void delete (Long id) {
		
		var entity = repository.findById(id).orElseThrow(() -> 	new ResourceNotFoundException("nao existe para este id"));
		repository.delete(entity);
	}
	


}