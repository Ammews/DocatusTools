package Docatus.DocatusTools.testes;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/")
public class testController {
    
    @GetMapping("teste")
    public String getTeste() {
        return "teste funcionou";
    }
    
}
