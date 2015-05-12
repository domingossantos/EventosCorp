angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

    $location.path('/eventos');
  };
})

.controller('EventoCtrl',['$scope','$stateParams','$location','$ionicModal',function($scope, $stateParams, $location, $ionicModal){
  $scope.eventos = [
    {id:1,
      descricao:'Inalguração do Hospital HPSM II',
      data:'10/10/2015',horario:'10:00',local:'Gabinete Sesma',
      observacao:'',dataCadastro:'16/05/2015',dataAlteracao:null,status:'N',
      ocorrencias:null,
      programacao:[
        {id:1,descricao:'Abertura',data:'16/05/2015',hora: '10:00'},
        {id:2,descricao:'Apresentação da Mesa',data:'16/05/2015',hora: '10:10'},
        {id:3,descricao:'Palavra do Prefeito',data:'16/05/2015',hora: '10:20'},
        {id:4,descricao:'Palavra do Secreatario',data:'16/05/2015',hora: '10:50'},
        {id:5,descricao:'Fechamento com o Prefeito',data:'16/05/2015',hora: '11:20'}
      ],
      recursos:[
        {recurso:'Mesa de som',quantidade:1,disponivel:false,responsavel:'Fulano',contato:'98741245'},
        {recurso:'Microfone',quantidade:4,disponivel:false,responsavel:'Fulano',contato:'98741245'},
        {recurso:'DataShow',quantidade:1,disponivel:false,responsavel:'Fulano',contato:'98741245'},
        {recurso:'Mesa de 4 metros',quantidade:1,disponivel:false,responsavel:'Fulano',contato:'98741245'},
        {recurso:'Cadeira',quantidade:6,disponivel:false,responsavel:'Fulano',contato:'98741245'}
      ],
      convidados:[
        {nome:'Fulano 1',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'},
        {nome:'Fulano 2',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'},
        {nome:'Fulano 3',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 4',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 5',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 6',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'}
      ]
    },
    {id:2,
      descricao:'Inalguração da Praça Edir Proença',
      data:'20/05/2015',horario:'10:00',local:'Praça Edir Proença',
      observacao:'',dataCadastro:'16/05/2015',dataAlteracao:null,status:'N',
      ocorrencias:null,
      programacao:[
        {id:1,descricao:'Abertura',data:'20/05/2015',hora: '10:00'},
        {id:2,descricao:'Apresentação da Autoridades',data:'20/05/2015',hora: '10:10'},
        {id:3,descricao:'Palavra do Prefeito',data:'20/05/2015',hora: '10:20'},
        {id:4,descricao:'Palavra do Secreatario',data:'20/05/2015',hora: '10:50'},
        {id:5,descricao:'Fechamento com o Prefeito',data:'20/05/2015',hora: '11:20'}
      ],
      recursos:[
        {recurso:'Mesa de som',quantidade:1,disponivel:false,responsavel:'Fulano',contato:'98741245'},
        {recurso:'Microfone',quantidade:4,disponivel:false,responsavel:'Fulano',contato:'98741245'}

      ],
      convidados:[
        {nome:'Fulano 1',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'},
        {nome:'Fulano 2',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'},
        {nome:'Fulano 3',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 4',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 5',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Liderança'},
        {nome:'Fulano 6',fone:'987456321',celular:'321456987',email:'email@gmail.com',twitter:'@fulano',facebook:'@fulano',grupo:'Governo'}
      ]
    }
      ];


        $scope.recursos = [
            {recurso:'Mesa de Som'},
            {recurso:'Microfone'},
            {recurso:'Datashow'},
            {recurso:'Mesa'},
            {recurso:'Cadeira'},
            {recurso:'Iluminação'},
            {recurso:'Palco'},
            {recurso:'Pupito'}
        ];

      $scope.tipoEventos = [
        {tipo:'Inalguração'},
        {tipo:'Festa'},
        {tipo:'Premiação'}
      ];

      $scope.redesSociais = [
        {servico:'Facebook',url:'@fulano'},
        {servico:'Twitter',url:'@fulano'},
        {servico:'Linkedin',url:'@fulano'}
      ];

        $scope.evento = {id : null,
            descricao : null,
            data : null,horario:null,local:null,
            observacao : null,dataCadastro:null,dataAlteracao:null,status:'N',
            ocorrencias:null,recursos:null,programacao:null};



        if($stateParams.eventoId != null){
            $scope.evento = $scope.eventos[$stateParams.eventoId - 1];
        }


      $scope.onPesquisarEvento = function(){
        $location.path('/app/pesquisaEvento');
      }

      $scope.onNovoEvento = function(){
          $location.path('/app/novoevento');
      }

      $scope.onSalvarEvento = function(){
          alert('Salvar');
        $scope.evento.id = 3;
        $scope.evento.dataCadastro = '26/04/2015 16:00:00';

        $scope.eventos.push($scope.evento);
        $location.path('/eventos');
      }


        $ionicModal.fromTemplateUrl('templates/evento/programacao_modal_form.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modalProgramacao = modal;
        });

        // Open the login modal
        $scope.programacaoForm = function() {
            $scope.modalProgramacao.show();
        };

        $scope.fechaProgramacao = function(){
            $scope.modalProgramacao.hide();
        }

        $ionicModal.fromTemplateUrl('templates/evento/recurso_modal_form.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modalRecurso = modal;
        });

        // Open the login modal
        $scope.recursoForm = function() {
            $scope.modalRecurso.show();
        };

        $scope.fechaRecurso = function(){
            $scope.modalRecurso.hide();
        }

        $scope.convidadoLista = function(idEvento){
          $location.path("/app/convidado-lista/"+idEvento);
        }

        $scope.compartilharLista = function(idEvento){
          alert('Agenda compartilhada');
        }

      $ionicModal.fromTemplateUrl('templates/evento/compartilhar_modal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modalCompartilhar = modal;
      });

      // Open the login modal
      $scope.compartilharModal = function(idEvento) {
        $scope.modalCompartilhar.show();
      };

      $scope.fechaCompartilhar = function(){
        $scope.modalCompartilhar.hide();
      }

}]);
