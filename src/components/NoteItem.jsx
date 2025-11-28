import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PRIORITY_COLORS = {
  high: '#ef4444',
  medium: '#eab308',
  low: '#22c55e',
};

function getPriorityLabel(priority) {
  if (priority === 'high') return 'Alta';
  if (priority === 'medium') return 'Media';
  return 'Baja';
}

export default function NoteItem({ note, onPress }) {
  const date = new Date(note.updatedAt || note.createdAt);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {note.imageUri ? (
        <Image source={{ uri: note.imageUri }} style={styles.thumbnail} />
      ) : (
        <View style={[styles.thumbnail, styles.placeholder]}>
          <Text style={styles.placeholderText}>IMG</Text>
        </View>
      )}

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {note.title}
          </Text>
          <View
            style={[
              styles.priorityBadge,
              { backgroundColor: PRIORITY_COLORS[note.priority] || '#3f3f46' },
            ]}
          >
            <Text style={styles.priorityText}>{getPriorityLabel(note.priority)}</Text>
          </View>
        </View>

        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#0f172a',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#64748b',
    fontSize: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    color: '#f9fafb',
    fontSize: 16,
    fontWeight: '600',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginLeft: 8,
  },
  priorityText: {
    color: '#020617',
    fontSize: 11,
    fontWeight: '700',
  },
  dateText: {
    color: '#a1a1aa',
    fontSize: 12,
  },
});
