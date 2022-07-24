
package com.portfolio.mgb.service;

import com.portfolio.mgb.entity.ExperienciaLaboral;
import com.portfolio.mgb.repository.iExperienciaRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional//con esto mantiene la persistencia entre el back y la base de datos 
public class ImpExperienciaService { 
    
    @Autowired
    iExperienciaRepository iExperienciaRepository;
    
    public List<ExperienciaLaboral> list(){
        return iExperienciaRepository.findAll();
    
    }
    public Optional<ExperienciaLaboral> getOne(int id) {
        return iExperienciaRepository.findById(id);
    }
    
    public Optional<ExperienciaLaboral> getByNombreExp(String nombreExp){
        return iExperienciaRepository.findByNombreExp(nombreExp);
    }
    
    public void save (ExperienciaLaboral expLab){
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
