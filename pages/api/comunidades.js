import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const client = new SiteClient('d2131803a12575b594c5de109cfb6e');
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
                                    itemType: "967727",
                                    ...request.body
                                })
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
