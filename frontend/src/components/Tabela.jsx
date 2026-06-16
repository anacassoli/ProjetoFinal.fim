export default function Tabela({ data }) {
return (
/*tabela de resultados*/
<table>
<thead>
<tr>
<th>Tema</th>
<th>Vestibular</th>
<th>Ano</th>
<th>Pergunta</th>
<th>Resposta</th>
<th>Comentário</th>
</tr>
</thead>
<tbody>

{/* Percorre todas as questões */}
{data.map((q, i) => (
<tr key={i}>
<td>{q.nome_tema}</td>
<td>{q.nome}</td>
<td>{q.ano_vest}</td>
<td>{q.enun_qst}</td>
<td>{q.enun_res}</td>
<td>{q.comentario}</td>
</tr>
))}
</tbody>
</table>
);
}