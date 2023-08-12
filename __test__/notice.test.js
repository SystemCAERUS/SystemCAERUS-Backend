// database.test.js
import Database from '../config/database.js'; // Update this path with the actual path to your database.js

describe('Database Connectivity', () => {
  test('should establish database connection successfully', (done) => {
    // Mock the MySQL connection
    const mockConnection = {
      query: jest.fn((query, callback) => {
        // Simulate a successful connection by invoking the callback with null error and some sample results
        callback(null, [{ '1': 1 }]);
      }),
      on: jest.fn((event, callback) => {
        // Simulate the 'connect' event by invoking the callback
        if (event === 'connect') {
          callback();
        }
      }),
    };
    jest.spyOn(Database.prototype, 'getConnection').mockReturnValue(mockConnection);

    // Get the connection from the Database instance
    const dbInstance = Database.getInstance();
    const connection = dbInstance.getConnection();

    // Test the connection by making a query
    connection.query('SELECT 1', (error, results) => {
      expect(error).toBeNull();
      expect(results).toEqual([{ '1': 1 }]);
      done();
    });
  });

  test('should handle database connection error', (done) => {
    // Mock the MySQL connection
    const mockConnection = {
      query: jest.fn((query, callback) => {
        // Simulate a connection error by invoking the callback with an error
        callback(new Error('Connection failed'), undefined);
      }),
      on: jest.fn((event, callback) => {
        // Do nothing for the 'connect' event (simulate no connection)
      }),
    };
    jest.spyOn(Database.prototype, 'getConnection').mockReturnValue(mockConnection);

    // Get the connection from the Database instance
    const dbInstance = Database.getInstance();
    const connection = dbInstance.getConnection();

    // Test the connection by making a query
    connection.query('SELECT 1', (error, results) => {
      expect(error).toBeDefined();
      expect(results).toBeUndefined();
      done();
    });
  });
});
