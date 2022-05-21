

//Un helper para poner el token en algunos sitios 

const baseUrl = process.env.REACT_APP_API_URL

export const fetchSinToken = ( endpoint, data, method='GET' ) => {

        const url = `${baseUrl}/${ endpoint }`;//localhost:4000/api/auth...
        if ( method === 'GET' ) {
            return fetch( url);
        } else {
            return fetch( url, {
                method,
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify( data )
            } )
        }
}

export const fetchConToken = ( endpoint, data, method='GET' ) => {

    const url = `${baseUrl}/${ endpoint }`;
    //Buscamos el token que guardamos en el localStorage
    const token = localStorage.getItem('token') || '';

    //mandamos el token a través del header
    if ( method === 'GET' ) {
        return fetch( url,{
            method,
            headers:{
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers:{
                'Content-Type':'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        } )
    }
}