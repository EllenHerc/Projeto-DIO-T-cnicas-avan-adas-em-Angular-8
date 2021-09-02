import { CampoGenerico } from './campo-generico';

export interface ConfigParms {
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
