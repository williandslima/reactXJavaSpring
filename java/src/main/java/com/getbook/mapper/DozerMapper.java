package com.getbook.mapper;

import java.util.ArrayList;
import java.util.List;

import com.github.dozermapper.core.DozerBeanMapperBuilder;
import com.github.dozermapper.core.Mapper;
//converte vo em entidade e entidades em objetos
public class DozerMapper {

	private static Mapper mapper = DozerBeanMapperBuilder.buildDefault();

	public static <O, D> D parseObject(O origin, Class<D> destination) {
		return mapper.map(origin, destination);
	}

	public static <O, D> List<D> parseListObejects(List<O> origin, Class<D> destination) {

		List<D> destinationObjects = new ArrayList<D>(); 
		for (O o : origin) {
			destinationObjects.add(mapper.map(o, destination));
		}

		return destinationObjects;

	}
}
