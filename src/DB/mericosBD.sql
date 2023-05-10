Usuario(Email,password,foto,data_create,data_mod)

Produto(produto_id,produto_nome,produto_valor,produto_foto,produto_tipo,produto_quantidade,produto_valor_Entrada,data_create,data_mod)

Ponto_Distribuicao(pdb_id,pdb_local,pdb_foto,data_create,data_mod)

Entregador(ent_id,ent_nome,ent_contacto,ent_rating,data_create,data_mod)

Comments_pedidos(cmp_id,cmp_userId,cmp_mensagem,cmp_rating,data_create,data_mod)

Pedido(pedido_id,id_produto,pedido_quantidade,pedido_custo,id_pdb,pedido_status,pedido_rating,id_user,id_ent,data_create,data_mod)

Actividades(activ_id,acti_accao,acti_tabela,acti_preMudanca,acti_posMudanca,id_user,data_create,data_mod)