VERSION 1

Planeia-se a construcao de um website denominado Mericos para a gestao de encomenda de produtos dos estudantes do ISUTC, no mesmo tenciona-se somente(ate ao momento) inscrever  alunos da faculdade do ISUTC, tenciona-se guardar os seus emails institucionais, nome, curso, turma(principal), numero do estudante, na outra parte dos usuarios estarao os entregadores, onde teremos os identificadores dos mesmos, nomes,contactos, ratings.

Os produtos do sistema serao variados mas os dados que foram vistos ccomo mais relevantes pra serem armazenados foram identificadores, designacoes, valor de aquisicao que sera o valor original do produto ao entrar no sistema sem contar com o valor que ja tem o lucro, a quantidade do produto, o tipo, e a imagem do produto para ser colocada no sistema, esses produtos serao solicitados pelos alunos, aos entregadores e irao escolher determinados pontos de distribuicao para fazer o levantamento da comida, os pontos de distribuicao somente tera como informacao relevante a sua identificacao, local e foto do local, assim apos escolher o ponto de distribuicao e o produto(caso esteja disponivel a quantidade requerida) o aluno, ira se direcionar ao ponto de distribuicao por si escolhido, o entregador que se encontrar disponivel ira aceitar o pedido e se direcionar ao ponto de distribuicao com o produto, o ponto de distribuicao conta com os seguintes dados a serem armazenados, os identificadores do: pedido, ponto de distribuicao, usuario(email), do entregador, produto; a quantidade do produto, o custo total e o status do pedido(sendo pendente caso o mesmo ainda esteja a ser resolvido, cancelado caso o cliente decida cancelar o pedido, e completo caso tenha terminado o pedido com sucesso), o rating.

Para saber do feedback dos clientes tera a seccao dos comentarios onde iremos armazenar os comentarios com o feedback de cada um dos usuarios nas entidades mencionadas anteriormente, tencionamos armazenar o identificador dos comentarios, o identificadores dos usuarios, a mensagem do comentario e o seu rating relacionado a seu comentario. Teremos tambem para a criacao de logs de todas alteracoes feitas a base de dados, uma entidade chamada de actividade que armazena o identificador dos mesmos, a accao a ser executada ,a tabela onde foi feita a alteracao, como se encontrava o dado antes de ser executado(somente se preenche para dados preexistentes), o id do usuario que fez a mudanca, o dados pos a mudanca. Em todas as tabelas devemos armazenar a data de criacao e a data de mdoficiacao.

Usuario(Email,password,foto,data_create,data_mod)

Produto(produto_id,produto_nome,produto_valor,produto_foto,produto_tipo,produto_quantidade,produto_valor_Entrada,data_create,data_mod)

Ponto_Distribuicao(pdb_id,pdb_local,pdb_foto,data_create,data_mod)

Entregador(ent_id,ent_nome,ent_contacto,ent_rating,data_create,data_mod)

Comments_pedidos(cmp_id,cmp_userId,cmp_mensagem,cmp_rating,data_create,data_mod)

Pedido(pedido_id,id_produto,pedido_quantidade,pedido_custo,id_pdb,pedido_status,pedido_rating,id_user,id_ent,data_create,data_mod)

Actividades(activ_id,acti_accao,acti_tabela,acti_preMudanca,acti_posMudanca,id_user,data_create,data_mod)

-----------------------------------------------------------------------------------------------------------------------------------------------------Made by Martins


Discussion with Celio

Alteracoes realizadas
Eliminiacao de: Actividades, rating dos comments, pontos de distribuicao,comments
Adicionou-se :novos parametros de user, fornecedor


-----------------------------------------------------------------------------------------------------------------------------------------------------Made by Martins
VERSION 2

Pretende-se a construcao de uma aplicacao web de encomenda de produtos alimenticios. Para o armazenamento de dados do usuario pretende-se armazenar um email, o nome, contacto, foto, password e o tipo que vai diferenciar os clientes/entregadores/e demais designacoes. Os entregadores contam com atributos adicionais como seu rating.

Os produtos  a serem comercializados no sistema tem como atributos, identificador, designacao, foto, quantidade, tipo, o fornecedor, valor de aquisicao e valor de venda. O fornecedores tambem serao armazenados tendo em conta o seu identificador, designacao, endereco, email, contacto, foto. Para a realizacao de um pedido e essencial que identifiquemos o pedido, quem fez o pedido, quem entregou o pedido, o produto que foi solicitado, a quantidade, o custo total, o local da instituicao onde foi solicitada e o status do pedido para que haja um acompanhamento do estado em que se encontra o pedido(sendo pendente caso o mesmo ainda esteja a ser resolvido, cancelado caso o cliente decida cancelar o pedido, e completo caso tenha terminado o pedido com sucesso). Deve se registrar no sistema as instituicoes em que a aplicacao funciona, bem como deve se registrar as salas/locais onde sera possivel fazer as entregas dentro da respectiva instituicao. Em todas as tabelas devemos armazenar o usuario que realizou a accao a data de criacao e a data de modificiacao.

User(user_email,user_password,user_nome,user_profile_pic,user_tipo,user_rating,id_user,data_create,data_mod)

Produto(prod_id,prod_nome,prod_pic,prod_quant,prod_tipo,prod_fornecedor,prod_valor_aquisicao,prod_valor_venda,id_user,data_create,data_mod)

Fornecedor(forn_id,forn_nome,forn_contacto,forn_endereco,forn_email,forn_contacto,forn_foto,id_user,data_create,data_mod)

Pedido(pedido_id,pedido_quantidade,pedido_custo,pedido_status,pedido_rating,id_local,id_produto,id_user,id_ent,data_create,data_mod)

Instituicao(inst_id,inst_nome,inst_foto,id_user,data_create,data_mod)

Local(local_id,local_nome,local_foto,id_inst,id_user,data_create,data_mod)

-----------------------------------------------------------------------------------------------------------------------------------------------------Made by Martins
