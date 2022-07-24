
package com.portfolio.mgb.controller;

import antlr.StringUtils;
import com.portfolio.mgb.Service.ImpPersonaService;
import com.portfolio.mgb.dto.DtoExperiencia;
import com.portfolio.mgb.entity.ExperienciaLaboral;
import com.portfolio.mgb.security.controller.Mensaje;
import com.portfolio.mgb.service.ImpExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/explab")
@CrossOrigin(origins = "http://localhost:4200")
public class ExpController {
    @Autowired
    ImpExperienciaService impExperienciaService;
    
    @GetMapping("/lista")
    public ResponseEntity<List<ExperienciaLaboral>> list(){
        List<ExperienciaLaboral> list=impExperienciaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!impExperienciaService.existsById(id)) {
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.NOT_FOUND);
        }
        impExperienciaService.delete(id);
        return new ResponseEntity(new Mensaje("Se ha eliminado correctamente"), HttpStatus.OK);
    }

    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DtoExperiencia dtoexp){      
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(impExperienciaService.existsByNombreExp(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("Esa experiencia existe"), HttpStatus.BAD_REQUEST);
        
        ExperienciaLaboral experiencia = new ExperienciaLaboral(dtoexp.getNombreExp(), dtoexp.getDescripcionExp());
        impExperienciaService.save(experiencia);
        
        return new ResponseEntity(new Mensaje("Experiencia agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody DtoExperiencia dtoexp){
        
        //Validacion del id
        if(!impExperienciaService.existsById(id))
            return new ResponseEntity(new Mensaje("El ID ingresado no existe"), HttpStatus.BAD_REQUEST);
        
        //Validacion nombre experiencia
        if(impExperienciaService.existsByNombreExp(dtoexp.getNombreExp()) && impExperienciaService.getByNombreExp(dtoexp
                .getNombreExp()).get().getId() != id)
            return new ResponseEntity(new Mensaje("La experiencia ingresada ya existe"), HttpStatus.BAD_REQUEST);
        
        //Campos no deben estar vacíos
        if(StringUtils.isBlank(dtoexp.getNombreExp()))
            return new ResponseEntity(new Mensaje("Nombre de experiencia es obligatorio"), HttpStatus.BAD_REQUEST);
        
        ExperienciaLaboral experiencia = impExperienciaService.getOne(id).get();
        experiencia.setNombreExp(dtoexp.getNombreExp());
        experiencia.setDescripcionExp((dtoexp.getDescripcionExp()));
        
        impExperienciaService.save(experiencia);
        return new ResponseEntity(new Mensaje("Experiencia actualizada"), HttpStatus.OK);
             
    }
    
   
}
