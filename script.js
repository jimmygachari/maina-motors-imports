// script.js - basic interactivity for Maina Motors Imports

const sampleListings = [
  {id:1,title:'Range Rover Sport',model:'Range Rover Sport',year:2022,price:'9,500,000',image:'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80'},
  {id:2,title:'Toyota Land Cruiser',model:'Land Cruiser',year:2023,price:'11,200,000',image:'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80'},
  {id:3,title:'Mercedes-Benz GLE',model:'GLE',year:2023,price:'8,800,000',image:'https://images.unsplash.com/photo-1541446654331-0b9b5f5d4e2f?auto=format&fit=crop&w=1200&q=80'},
  {id:4,title:'BMW X6',model:'X6',year:2021,price:'7,200,000',image:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'},
  {id:5,title:'Mazda CX-5',model:'CX-5',year:2021,price:'2,200,000',image:'https://images.unsplash.com/photo-1542362567-1c0e4b9b0d0b?auto=format&fit=crop&w=1200&q=80'},
  {id:6,title:'Nissan Patrol',model:'Patrol',year:2020,price:'5,900,000',image:'https://images.unsplash.com/photo-1541446654331-0b9b5f5d4e2f?auto=format&fit=crop&w=1200&q=80'}
];

function renderFeatured(){
  const container = document.getElementById('featured');
  if(!container) return;
  container.innerHTML = '';
  sampleListings.slice(0,3).forEach(l=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<img src="${l.image}" alt="${l.title}"><h3>${l.title}</h3><div class="meta">${l.year} • ${l.model}</div><div class="price">KES ${l.price}</div>`;
    container.appendChild(el);
  });
}

function renderListings(){
  const list = document.getElementById('listings');
  if(!list) return;
  list.innerHTML = '';
  sampleListings.forEach(l=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<img src="${l.image}" alt="${l.title}"><h3>${l.title}</h3><div class="meta">${l.year} • ${l.model}</div><div class="price">KES ${l.price}</div><div class="form-actions"><a class="btn btn-red" href="contact.html">Buy Now</a></div>`;
    list.appendChild(el);
  });
}

function initSearch(){
  const hs = document.getElementById('homeSearch');
  if(hs){
    hs.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'){
        const q = hs.value.trim();
        if(q) window.location.href = `buy.html?search=${encodeURIComponent(q)}`;
      }
    });
  }
  const ls = document.getElementById('listSearch');
  if(ls){
    ls.addEventListener('input', ()=> {
      const q = ls.value.trim().toLowerCase();
      const list = document.getElementById('listings');
      if(!list) return;
      Array.from(list.children).forEach(card=>{
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(q) ? '' : 'none';
      });
    });
  }
}

function initSellForm(){
  const form = document.getElementById('sellForm');
  const msg = document.getElementById('sellMessage');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    msg.textContent = 'Thank you! Your listing has been submitted for review.';
    form.reset();
  });
}

function initAuthForms(){
  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', (e)=>{
      e.preventDefault();
      window.location.href = 'hire.html';
    });
  }
  const register = document.getElementById('registerForm');
  if(register){
    register.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Account created (demo). Please login to access member features.');
      window.location.href = 'login.html';
    });
  }
}

function initContact(){
  const c = document.getElementById('contactForm');
  if(!c) return;
  c.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Message sent (demo). We will contact you shortly.');
    c.reset();
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderFeatured();
  renderListings();
  initSearch();
  initSellForm();
  initAuthForms();
  initContact();
});
