const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      sendMessage: (firstName, email, message) => {
        fetch(process.env.BACKEND_URL + "/api/message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(firstName, email, message),
        })
          .then((response) => response.json())
          .catch((err) => console.log("err", err));
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
