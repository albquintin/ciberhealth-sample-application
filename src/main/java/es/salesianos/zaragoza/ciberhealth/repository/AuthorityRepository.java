package es.salesianos.zaragoza.ciberhealth.repository;

import es.salesianos.zaragoza.ciberhealth.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
