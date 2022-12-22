package com.getbook.data.vo;


import java.io.Serializable;

import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.github.dozermapper.core.Mapping;


@JsonPropertyOrder({ "id", "tituloLivro", "descricao", "foto", "autor"})
public class PostagemVO extends RepresentationModel<PostagemVO> implements Serializable{

	private static final long serialVersionUID = 1l;
	
	@JsonProperty("id")
	@Mapping("id")
	private Long key;
	private String tituloLivro;
	private String descricao;
	private String foto;
	private String autor;

	/*
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	@NotNull
	private Tema tema;

	@ManyToOne
	@JsonIgnoreProperties("postagem")
	@NotNull
	private Usuario usuario;
*/
	

	public String getTituloLivro() {
		return tituloLivro;
	}

	/**
	 * @return the key
	 */
	public Long getKey() {
		return key;
	}

	/**
	 * @param key the key to set
	 */
	public void setKey(Long key) {
		this.key = key;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setTituloLivro(String tituloLivro) {
		this.tituloLivro = tituloLivro;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}
	
	
	
	

	

}
