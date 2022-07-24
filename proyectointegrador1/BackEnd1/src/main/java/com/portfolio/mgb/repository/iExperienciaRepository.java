
package com.portfolio.mgb.repository;

import com.portfolio.mgb.entity.ExperienciaLaboral;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface iExperienciaRepository extends JpaRepository<ExperienciaLaboral, Integer> {
    public Optional<ExperienciaLaboral> findByNombreExp(String nombreExp);
    public boolean existsByNombreExp(String nombreExp);
}
