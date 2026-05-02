import folium
import pandas as pd

# 1. Define Supply Chain Locations (Nodes)
data = {
    'Location': ['Supplier A', 'Warehouse 1', 'Retailer X'],
    'Lat': [34.05, 37.77, 40.71],
    'Lon': [-118.24, -122.41, -74.00],
    'Type': ['Supplier', 'Warehouse', 'Retailer']
}
nodes = pd.DataFrame(data)

# 2. Define Logistics Flows (Edges)
flows = [
    ('Supplier A', 'Warehouse 1'),
    ('Warehouse 1', 'Retailer X')
]

# 3. Initialize Map
m = folium.Map(location=[37.09, -95.71], zoom_start=4)

# 4. Add Nodes to Map
colors = {'Supplier': 'green', 'Warehouse': 'blue', 'Retailer': 'red'}
for _, row in nodes.iterrows():
    folium.Marker(
        [row['Lat'], row['Lon']],
        popup=row['Location'],
        icon=folium.Icon(color=colors[row['Type']])
    ).add_to(m)

# 5. Add Flow Lines (Edges)
for start_loc, end_loc in flows:
    start = nodes[nodes['Location'] == start_loc][['Lat', 'Lon']].values[0]
    end = nodes[nodes['Location'] == end_loc][['Lat', 'Lon']].values[0]
    folium.PolyLine([start, end], color="gray", weight=2, opacity=0.7).add_to(m)

# Save or display the map
m.save('supply_chain_map.html')
