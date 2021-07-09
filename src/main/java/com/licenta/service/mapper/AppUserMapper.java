package com.licenta.service.mapper;

import com.licenta.domain.*;
import com.licenta.service.dto.AppUserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link AppUser} and its DTO {@link AppUserDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class })
public interface AppUserMapper extends EntityMapper<AppUserDTO, AppUser> {
    @Mapping(target = "user", source = "user", qualifiedByName = "id")
    AppUserDTO toDto(AppUser s);

    @Named("idAppUser")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "idAppUser", source = "idAppUser")
    AppUserDTO toDtoId(AppUser appUser);
}