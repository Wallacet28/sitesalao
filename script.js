const form = document.querySelector('#agendamento-form');
const dataInput = document.querySelector('#data');
const horarioInput = document.querySelector('#horario');

// Define os horários disponíveis
const horariosDisponiveis = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

// Verifica se a data selecionada é válida
function validarData() {
	const hoje = new Date();
	const dataSelecionada = new Date(dataInput.value);
	return hoje <= dataSelecionada;
}

// Verifica se o horário selecionado é válido
function validarHorario() {
	return horariosDisponiveis.includes(horarioInput.value);
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    if (validarData() && validarHorario()) {
    alert('Agendamento realizado com sucesso!');
    form.reset(); // Limpa o formulário
    } else {
    alert('Data ou horário selecionados não estão disponíveis. Por favor, selecione outra data ou horário.');
    }
    });


$(document).ready(function() {

        // Inicializa o calendário
    $('#calendario').fullCalendar({
        header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
        },
        editable: false,
        events: [
            // Define os horários disponíveis para agendamento
        {
        title: 'Corte Masculino',
        start: '2023-02-14T10:00:00',
        end: '2023-02-14T11:00:00',
        allDay: false,
        color: '#3778bf'
        },
        {
        title: 'Corte Masculino',
        start: '2023-02-14T11:00:00',
        end: '2023-02-14T12:00:00',
        allDay: false,
        color: '#3778bf'
        },
        {
        title: 'Corte Feminino',
        start: '2023-02-14T13:00:00',
        end: '2023-02-14T14:00:00',
        allDay: false,
        color: '#cc3300'
        },
        {
        title: 'Corte Feminino',
        start: '2023-02-14T14:00:00',
        end: '2023-02-14T15:00',

    }
],
// Lida com o clique em um horário disponível para agendamento
dayClick: function(date, jsEvent, view) {
  $('#calendario').fullCalendar('gotoDate', date);
  $('#calendario').fullCalendar('changeView', 'agendaDay');
  $('#calendario').fullCalendar('select', date);
}