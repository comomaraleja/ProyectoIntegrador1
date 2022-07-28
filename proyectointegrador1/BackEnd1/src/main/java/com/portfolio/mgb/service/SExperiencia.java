
package com.portfolio.mgb.service;

import com.portfolio.mgb.entity.Experiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.mgb.repository.RExperiencia;

@Service
@Transactional//con esto mantiene la persistencia entre el back y la base de datos 
public class SExperiencia { 
    
    @Autowired
    RExperiencia iExperienciaRepository;
    
    public List<Experiencia> list(){
        return iExperienciaRepository.findAll();
    
    }
    public Optional<Experiencia> getOne(int id) {
        return iExperienciaRepository.findById(id);
    }
    
    public Optional<Experiencia> getByNombreExp(String nombreExp){
        return iExperienciaRepository.findByNombreExp(nombreExp);
    }
    
    public void save (Experiencia expLab){
        iExperienciaRepository.save(expLab);
    }
    
    public void delete (int id){
        iExperienciaRepository.deleteById(id);
    }
    
    public boolean existsById(int id){
        return iExperienciaRepository.existsById(id);
    }
    
    public boolean existsByNombreExp(String nombreExp){
        return iExperienciaRepository.existsByNombreExp(nombreExp); 
    }
}
