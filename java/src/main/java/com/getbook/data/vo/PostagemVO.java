package com.getbook.data.vo;

public class PostagemVO {

	
	private Long id;
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
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTituloLivro() {
		return tituloLivro;
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
