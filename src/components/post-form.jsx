import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PostService from '../services/post-service';

const PostForm = ({ post, isEdit }) => {
  const initForm = {
    titre: { value: post.title, isValid: true },
    description: { value: post.content, isValid: true },
    auteur: { value: post.author, isValid: true },
  };

  const [form, setForm] = useState(initForm);

  console.log('postForm', post); ///////////////////////////////////////

  const history = useHistory();

  const validateForm = () => {
    let newForm = form;

    // if (!isEditForm) {
    //   // Validator picture seulement en mode ajout d'un pokémon
    //   const start =
    //     'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    //   const end = '.png';

    //   if (
    //     !form.picture.value.startsWith(start) ||
    //     !form.picture.value.endsWith(end)
    //   ) {
    //     const errorMsg: string = "L'url n'est pas valide.";
    //     const newField: Field = {
    //       value: form.picture.value,
    //       error: errorMsg,
    //       isValid: false,
    //     };
    //     newForm = { ...newForm, ...{ picture: newField } };
    //   } else {
    //     const newField: Field = {
    //       value: form.picture.value,
    //       error: '',
    //       isValid: true,
    //     };
    //     newForm = { ...newForm, ...{ picture: newField } };
    //   }
    // }

    // Validator titre
    // Si le champ titre ne valide pas la Regex
    if (!/^.+$/.test(form.titre.value) || !form.titre.value) {
      // On met à jour le state avec le message d'erreur
      const errorMsg = 'Le champs titre est requis.';
      const newField = {
        value: form.titre.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ titre: newField } };
      // Si le champ name est valide par rapport à la Regex
    } else {
      const newField = {
        value: form.titre.value,
        error: '',
        isValid: true,
      };
      newForm = { ...newForm, ...{ titre: newField } };
    }

    // Validator description
    // Si le champ description ne valide pas la Regex
    if (!/^.+$/.test(form.description.value) || !form.description.value) {
      // On met à jour le state avec le message d'erreur
      const errorMsg = 'Le champs description est requis.';
      const newField = {
        value: form.description.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ description: newField } };
      // Si le champ description est valide par rapport à la Regex
    } else {
      const newField = {
        value: form.description.value,
        error: '',
        isValid: true,
      };
      newForm = { ...newForm, ...{ description: newField } };
    }

    // Validator auteur
    // Si le champ auteur ne valide pas la Regex
    if (!/^.+$/.test(form.auteur.value) || !form.auteur.value) {
      // On met à jour le state avec le message d'erreur
      const errorMsg = 'Le champs auteur est requis.';
      const newField = {
        value: form.auteur.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ auteur: newField } };
      // Si le champ auteur est valide par rapport à la Regex
    } else {
      const newField = {
        value: form.auteur.value,
        error: '',
        isValid: true,
      };
      newForm = { ...newForm, ...{ auteur: newField } };
    }

    console.log('newForm', newForm); //////////////////////////////////////////////

    // On met à jour le state form après la validation
    setForm(newForm);

    // La fonction validateForm() retourne un boolean qui est true uniquement si tous les champs sont valides
    return (
      newForm.titre.isValid &&
      newForm.description.isValid &&
      newForm.auteur.isValid
    );
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };
    setForm({ ...form, ...newField });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form', form); ////////////////////////////////////////////////

    const isFormValid = validateForm();
    console.log(isFormValid); ////////////////////////////////////////////////

    if (isFormValid) {
      const newPost = {
        title: form.titre.value,
        content: form.description.value,
        author: form.auteur.value,
      };
      // pokemon.picture = form.picture.value;
      // pokemon.name = form.name.value;
      // pokemon.hp = form.hp.value;
      // pokemon.cp = form.cp.value;
      // pokemon.types = form.types.value;

      if (isEdit) {
        newPost.id = post.id;
        PostService.updatePost(newPost).then((post) => history.push(`/posts`));
      } else {
        PostService.addPost(newPost).then((post) => history.push(`/posts`));
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/*JSON.stringify(isEdit)*/}
      <div className='form-group'>
        <label htmlFor='titre'>Titre</label>
        <input
          id='titre'
          name='titre'
          type='text'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
          value={form.titre.value}
        />
        {form.titre.error && (
          <div className='alert-danger p-2 pl-3'>{form.titre.error}</div>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          type='text'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
          value={form.description.value}
        />
        {form.description.error && (
          <div className='alert-danger p-2 pl-3'>{form.description.error}</div>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='auteur'>Auteur</label>
        <input
          id='auteur'
          name='auteur'
          type='text'
          className='form-control'
          onChange={(e) => handleInputChange(e)}
          value={form.auteur.value}
        />
        {form.auteur.error && (
          <div className='alert-danger p-2 pl-3'>{form.auteur.error}</div>
        )}
      </div>
      <div className='form-group'>
        <Link
          name='retour'
          type='button'
          className='btn btn-danger mr-4'
          to='/posts'
        >
          Retour
        </Link>
        <button name='submit' type='submit' className='btn btn-primary'>
          Valider
        </button>
      </div>
    </form>
  );
};
export default PostForm;
