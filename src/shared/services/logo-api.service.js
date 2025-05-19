const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;

export class LogoApiService {
    getUrlToLogo(source) {
        if(source.url){
            return `${logoApiUrl}/${new URL(source.url).host}`;
        } else {
            return `${logoApiUrl}/${new URL(source).host}`;
        }
    }
}