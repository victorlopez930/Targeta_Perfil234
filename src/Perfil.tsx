import React from 'react';

const Perfil: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white p-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsn1XW4Xack2WtB0i4cCyJYIXFsLAKPUZMpsMw8dk74EcYaxR57jbVIXeQA-7tBlWnGjs&usqp=CAU"
            alt="Foto de perfil"
            className="rounded-full w-32 h-32 object-cover border-4 border-gray-300 dark:border-gray-700"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-center">Alejandro llanten</h1>

        
        <h2 className="text-lg text-center text-gray-600 dark:text-gray-400">Desarrollador wed</h2>

        
        <p className="text-sm text-center px-4">
          Me gusta desarrollar y crear mis aplicacione,paginas wed o demas cosas
        </p>

        
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100055527228978"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
          >
            Facebook
          </a>
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFA0hIziXuDRM4WxRxpuGg2wk0gkV5YH23Kg&s"
            className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-600 transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
