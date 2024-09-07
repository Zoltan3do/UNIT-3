import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import fantasy from './data/fantasy.json';
import CommentArea from './components/CommentArea';
import SingleBook from './components/SingleBook';

test('controllo se welcome viene testato correttamente', () => {
  render(<Welcome />);
  const welcome = screen.getByText("Benvenuto")
  expect(welcome).toBeInTheDocument();
});

test("verifico che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  render(<BookList />);
  const numeroCards = screen.getAllByTestId("single-book");
  expect(numeroCards.length).toBe(fantasy.length);
})

//da finire
test("Il componente commentArea viene renderizzato correttamente", async () => {
  render(<><CommentArea /> <SingleBook /></>);
  const commentArea = await screen.findByTestId("areacommenti");
  const card = screen.getAllByTestId("single-book")[0];
  fireEvent.click(card)
  expect(commentArea).toBeInTheDocument();
})

test("Il filtraggio dei libri funziona", async () => {
  render(<BookList />);
  const searchInput = await screen.findByPlaceholderText("Cerca per titolo");
  fireEvent.change(searchInput, { target: { value: "Wish" } });
  const filteredBook = await screen.findAllByText((content, element) =>
    content.includes("The Last Wish")
  );
  expect(filteredBook).toHaveLength(2);
})

//da finire
test('applica la trasformazione scale quando la card viene cliccata', () => {
  render(<SingleBook />);
  const cards = screen.getAllByTestId("single-book");

  expect(cards[0]).not.toHaveClass('transformationScale');
  fireEvent.click(cards[0]);
  expect(cards[0]).toHaveClass('transformationScale');
  fireEvent.click(cards[1]);
  expect(cards[0]).not.toHaveClass('transformationScale');
});

test("non ci sono istanze di singleComment all'avvio del dom", () => {
  render(<BookList />)
  const comment = screen.queryByTestId("commentino");
  expect(comment).not.toBeInTheDocument();
});