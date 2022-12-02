import React, { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export type PortfolioUpload = {
  nameValue: string;
  descValue: string;
  urlValue: string;
  imageValue: File | string | null;
};

const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const submitPortfolio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.current?.[0] as HTMLInputElement;
    const description = form.current?.[1] as HTMLInputElement;
    const url = form.current?.[2] as HTMLInputElement;
    const image = form.current?.[3] as HTMLInputElement;

    const nameValue = name.value;
    const descValue = description.value;
    const urlValue = url.value;
    const imageValue = image.files?.[0];

    const storageRef = ref(storage, `portfolio/${imageValue?.name}`);

    uploadBytes(storageRef, imageValue as File).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              nameValue,
              descValue,
              urlValue,
              imageValue: downloadUrl,
            });
          },
          (error) => {
            console.log(error);
            savePortfolio({
              nameValue,
              descValue,
              urlValue,
              imageValue: null,
            });
          }
        );
      },
      (error) => {
        console.log(error);
        savePortfolio({
          nameValue,
          descValue,
          urlValue,
          imageValue: null,
        });
      }
    );
  };

  const savePortfolio = async (portfolio: PortfolioUpload) => {
    console.log(portfolio);
    try {
      await addDoc(collection(db, "portfolio"), portfolio);
      window.location.reload();
    } catch (error) {
      alert("Failed to add portfolio");
    }
  };

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input name="name" type="text" placeholder="name" />
        </p>
        <p>
          <textarea name="description" placeholder="description" />
        </p>
        <p>
          <input name="url" type="text" placeholder="url" />
        </p>
        <p>
          <input name="image" type="file" placeholder="image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  );
};

export default Home;
