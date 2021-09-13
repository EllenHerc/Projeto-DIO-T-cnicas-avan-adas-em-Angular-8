import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CampoGenerico } from "../shared/models/campo-generico";
import { ConfigParams } from "../shared/models/config-params";

@Injectable({
    providedIn: 'root'
})
export class ConfigParamsService{

    public configParams(config: ConfigParams): HttpParams {
        let httpParams = new HttpParams();

        if(config.pagina){
            httpParams = httpParams.set('_page', config.pagina.toString());
        }

        if(config.limite){
            httpParams = httpParams.set('_limit', config.limite.toString());
        }

        if(config.pesquisa){
            httpParams = httpParams.set('q', config.pesquisa);
        }

        if(config.campo.valor){
            httpParams = httpParams.set(config.campo.tipo, config.campo.valor);
        }

        httpParams = httpParams.set('_sort', 'id');
        httpParams = httpParams.set('_order', 'desc');

        return httpParams;

    }

} 