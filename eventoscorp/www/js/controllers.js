angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})

.controller('EventoCtrl',['$scope','$stateParams',function($scope,$stateParams){
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



    ;



        $scope.evento = null;

        if($stateParams.eventoId != null){
            $scope.evento = $scope.eventos[$stateParams.eventoId - 1];
        }


      $scope.onPesquisarEvento = function(){
        $stateParams.path('/pesquisaEvento');
      }

}]);
