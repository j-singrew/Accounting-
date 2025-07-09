import bgImage from '../../assets/pexels-leeloothefirst-6929024.jpg';

const headerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  color: 'white',
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Welcome to PGMS</h1>
    </header>
  );
}

export default Header;